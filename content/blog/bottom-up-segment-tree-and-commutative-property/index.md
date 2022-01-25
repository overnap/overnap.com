---
title: 바텀업 세그먼트 트리와 교환법칙 (ft. 금광 세그)
date: 2022-01-25
tags:
  - algorithm
  - data structure
published: true
---

최근 금광 세그 문제를 몇 개 풀었다. 새로 배운 사실이 있어 정리한다.

나는 탑다운 세그먼트 트리를 싫어한다. 가능하다면 펜윅 트리를 사용하고, 레이지가 필요 없다면 바텀업 세그 트리를 쓰는 편이다. 왠지는 모르겠다. 탑다운을 하면 코드가 더러워지고 자주 헷갈려서 그런 것 같다.

금광 세그를 풀 때도 바텀업으로 구현했다. 원본 문제인 [백준 10167 금광](https://www.acmicpc.net/problem/10167)은 업데이트만 구현하면 되서 아주 간단하다. 전체에 대한 쿼리만 수행하기 때문에 `tree[1]`으로 접근하면 된다.

코드는 아래와 같다:

```cpp
struct seg {
	struct node {
		ll lo, hi, sum, val;
	};

	int n;
	vector<node> tree;

	static node op(const node &a, const node &b) {
		node ret{ max(a.lo, a.sum + b.lo), max(b.hi, b.sum + a.hi), a.sum + b.sum, 0 };
		ret.val = max({ a.hi + b.lo, a.val, b.val });
		return ret;
	}

	void update(int x, ll v) {
		x += n;
		tree[x] = { tree[x].val + v, tree[x].val + v, tree[x].val + v, tree[x].val + v };
		for (x/=2; x>0; x/=2)
			tree[x] = op(tree[x*2], tree[x*2+1]);
	}
};
```

하지만 비슷한 문제인 [백준 16997 히스토그램에서 가장 큰 직사각형과 쿼리](https://www.acmicpc.net/problem/16977)는 쿼리에 범위 L, R이 정해져 있어 쿼리를 구현해야 한다. 나는 생각 없이 하던 대로 쿼리를 구현했다.

```cpp
// wrong implementation
node query(int l, int r) {
    node ret{ 0, 0, 0, 0 };
    for (l+=n, r+=n; l<=r; l/=2, r/=2) {
        if (l%2)
            ret = op(tree[l++], ret);
        if (r%2 == 0)
            ret = op(ret, tree[r--]);
    }
    return ret;
}
```

위 코드에서 무언가 이상한 걸 눈치챘다면 이 글을 읽을 필요가 없다.

먼저 세그먼트 트리의 개념을 짚고 가자. 세그먼트 트리는 쿼리 연산에 결합법칙이 성립할 때 적용할 수 있다. 업데이트 연산에 분배법칙이 성립한다면 lazy propagation을 적용할 수 있다.

그럼 교환법칙은? 교환법칙이 성립한다면 구현에 신경 쓸 일이 적어진다. 쿼리나 업데이트 연산이 적용되는 순서를 고려하지 않고 작성해도 괜찮다.

일반적으로 문제 해결에 사용되는 `(+)`, `min`, `max`, `(^)` 연산은 위 세 가지 성질을 모두 만족한다. 예를 들면 $|a|=3$일 때 $\sum{a_i}=a_1+a_2+a_3=a_3+a_1+a_2$이다. 뭐 당연하다. 덕분에 생각 없이 짜도 다 맞는다.

하지만 금광 세그는 교환법칙이 성립하지 않는다. 연산의 순서가 중요하다는 말이다.

탑다운은 직관적이라서 실수할 일이 없다. 보통 `return op(query(n, s, m, l, r), query(n, m+1, e, l, r));` 같이 작성하므로 왼쪽과 오른쪽의 연산 순서가 아주 명확하다.

바텀업은 조금 신경 써줘야 한다. 바텀업은 반복문을 통해 타고 올라간다. 이때 `ret` 에 값을 누적시키는 과정을 잘 보자. 왼쪽과 오른쪽에서 각각 값을 누적한다. 나는 바보같이 왼쪽에서 누적되니까 왼쪽에 값을 두면 되겠지 생각했다. 그리고 WA를 받았다.

잘 보면 반복문이 진행될수록 안쪽에 있는 노드를 누적한다. 왼쪽에서 누적할 땐 누적된 `ret`가 왼쪽에 와야 하는 거다. 또 왼쪽과 오른쪽을 한 값에 누적하면 순서가 망가지는 것도 관찰할 수 있다. 누적값을 분리하고 연산 순서를 제대로 해주자.

```cpp
// right implementation
int query(int l, int r) {
    node retl{ 0, 0, 0, 0 }, retr = retl;
    for (l+=n, r+=n; l<=r; l/=2, r/=2) {
        if (l%2)
            retl = op(retl, tree[l++]);
        if (r%2 == 0)
            retr = op(tree[r--], retr);
    }
    return op(retl, retr).val;
}
```

잘 작동한다.
