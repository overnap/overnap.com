---
title: 세그먼트 트리를 활용한 KMP
date: 2022-02-05
tags:
  - algorithm
published: true
---

요즘 문자열을 공부하고 있다. 엊그제 KMP를 배웠다.

배운 김에 작년 ICPC K번이었던 [백준 23576 Stock Price Prediction](https://www.acmicpc.net/problem/23576)을 풀어봤다. 대회 중 문자열과 세그를 합친 문제라고 추측했으나 결국 풀지 못했던 문제다.

재밌게 풀고 나서 solved.ac를 들어가 보니 또 웰노운이라는 말을 한다. CEOI 기출인 [백준 3308 Matching](https://www.acmicpc.net/problem/3308), 서강대 SPC 기출 [백준 20298 파인애플 피자](https://www.acmicpc.net/problem/20298)가 같은 아이디어고 SCPC 기출에도 나왔다고 한다.

나만 모르는 웰노운이기도 하고, 접근이 재밌어서 간단히 정리해 본다.

좌표 압축을 했을 때 같은 패턴을 찾는 문제다.

특정 구간의 압축이 필요해서 값을 넣고 빼는 온라인 쿼리가 필요하다. 이때 각 좌표를 넣을 때 순위를 결정하면 최종 순위도 결정된다는 걸 관찰할 수 있다. 각 좌표를 넣었을 때 순위는 세그먼트 트리나 펜윅 트리를 쓰면 간단하게 처리할 수 있다.

이제 주어진 패턴의 위치를 찾는 건 KMP를 쓰면 선형 시간에 해결할 수 있다.

좀 더 구체적으로 설명하기 위해, 검사할 문자열에서 현재 보고 있는 위치를 $i$, 패턴에서 현재 보고 있는 위치를 $j$라 하자. $[i-j, i]$까지 suffix를 세그먼트 트리로 관리하면 $i+1$번째 데이터를 넣을 때 순위를 알 수 있다. 이제 KMP처럼 패턴의 $j+1$번째 값의 순위와 비교해서 일치 여부에 따라 $j$를 조절하면 된다. $j$의 감소하는 정도는 failure function로 전처리하자.

시간 복잡도는 모든 $x_i$와 $y_i$가 세그먼트 트리에 한 번씩 들어갔다 나오므로 $O(N\log{N} + M\log{M})$이다.

요약하면 KMP인데 일치 판정을 세그먼트 트리로 하는 유형이다. 특이해서 풀어볼 만하다.

아래는 정답 코드다. 가독성이 정말 안 좋아서 한 번 고쳐야 할 것 같다.

```cpp
#include <bits/stdc++.h>

using namespace std;
using ll = long long;
using pii = pair<int, int>;

struct fenwick {
	vector<int> tree;

	void update(int x, int v) {
		for (x++; x<tree.size(); x+=x&-x)
			tree[x] += v;
	}

	int sum(int x) {
		int ret = 0;
		for (x++; x>0; x-=x&-x)
			ret += tree[x];
		return ret;
	}
};

void solve() {
	int m, n;
	cin >> m >> n;
	vector<int> x(m), y(n);
	auto input = [&] (vector<int> &v) {
		for (int &i : v)
			cin >> i;
		auto mp = v;
		sort(mp.begin(), mp.end());
		mp.erase(unique(mp.begin(), mp.end()), mp.end());
		for (int &i : v)
			i = lower_bound(mp.begin(), mp.end(), i) - mp.begin() + 1;
	};
	input(x), input(y);

	fenwick ft;
	ft.tree.resize(m+2);

	vector<pii> seq(m);
	for (int i=0; i<m; ++i) {
		ft.update(x[i], 1);
		seq[i] = { ft.sum(x[i]-1), ft.sum(x[i]) };
	}

	vector<int> fail(m);
	ft.tree.clear();
	ft.tree.resize(m+2);
	for (int i=1, j=0; i<m; ++i) {
		ft.update(x[i], 1);
		while (j && make_pair(ft.sum(x[i]-1), ft.sum(x[i])) != seq[j]) {
			const int o = fail[j-1];
			while (j > o) {
				ft.update(x[i-j], -1);
				j--;
			}
		}
		fail[i] = ++j;
	}

	ft.tree.clear();
	ft.tree.resize(n+2);
	vector<int> ans;
	for (int i=0, j=0; i<n; ++i) {
		ft.update(y[i], 1);
		while (j && make_pair(ft.sum(y[i]-1), ft.sum(y[i])) != seq[j]) {
			const int o = fail[j-1];
			while (j > o) {
				ft.update(y[i-j], -1);
				j--;
			}
		}
		if (j+1 == m) {
			ans.push_back(i-j);
			const int o = fail[j];
			while (j > o) {
				ft.update(y[i-j], -1);
				j--;
			}
			ft.update(y[i-j], -1);
		} else
			j++;
	}
	if (ans.empty())
		cout << 0;
	else {
		for (int i=0; i<ans.size(); ++i) {
			if (i)
				cout << ' ';
			cout << ans[i]+1;
		}
	}
}

int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
//	int t; cin >> t;
//	while (t--)
		solve();
	return 0;
}
```

