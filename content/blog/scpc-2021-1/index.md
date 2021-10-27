---
title: SCPC 2021 Round 1 후기
date: 2021-08-06
tags:
  - competitive programming
  - scpc
published: true
---





두 번째로 SCPC에 참여했다. 모든 문제를 풀었다. 절반을 풀었던 작년에 비해 고무적인 성과다.

아쉬운 일이지만 내 실력 상승보단 대회의 난이도 하락 영향이 크다. 난이도는 낮으나 복잡한 문제 설명과 귀찮은 구현 위주로 출제됐다. 예선 1차라 가볍게 출제한 것 같다.

아이디어와 코드를 남긴다. 대회에 제출했던 코드를 그대로 갖고 왔으니 참고만 하길 바란다.



## 1. 친구들

$i$​​번째 사람은 $i+D_i$​​​​​​​​번째 사람과 친구다. 친구의 친구도 친구이다.

친구 관계인 극대 그룹의 수를 찾아라.

---

친구의 친구도 친구라는 건 친구 관계가 동치관계(equivalence relation)라는 뜻이다. 그러면 극대 그룹은 동치류(equivalence class)가 된다.

동치류의 개수를 구하는 건 파티션의 개수를 구하는 것이다. 전형적인 서로소 집합 문제라 판단하고 바로 구현에 들어가 AC를 받았다.

하지만 더 좋은 풀이가 있다. $D_i>0$​​​​​​이므로 그래프로 추상화했을 때 극대 그룹이 항상 트리임이 보장된다. 곧 $i+D_i>N$​​​​인 노드가 단 하나 존재한다. 그런 노드의 개수를 세어주면 파티션의 개수가 되므로 $O(N)$​​으로 풀 수 있다.[^1]

[^1]: 구사과 블로그의 [이 글](https://koosaga.com/274)에서 나온 풀이다. "그래프가 forest의 형태이기 때문에, $i+D_i>N$ 인 $i$ 의 개수를 세어줘도 됩니다. $i+D_i>N$ 인 것과, 각 트리의 루트인 것이 동치이기 때문입니다."

아래 코드는 대회 중 작성한 서로소 집합 풀이다. 경로 압축만 사용해 시간복잡도는 $O(N\log N)$​​​​이다. 

```cpp
#include <bits/stdc++.h>

using namespace std;
using ll = long long;
using pii = pair<int, int>;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int t;
    cin >> t;
    for (int tc=0; tc<t; ++tc)
    {
        int n;
        cin >> n;

        vector<int> parent(n);
        for (int i=0; i<n; ++i)
            parent[i] = i;

        function<int (int)> find = [&] (int index)
        {
            if (index == parent[index])
                return index;
            return parent[index] = find(parent[index]);
        };

        auto merge = [&] (int a, int b)
        {
            a = find(a);
            b = find(b);

            if (a != b)
                parent[a] = b;
        };

        for (int i=0; i<n; ++i)
        {
            int d;
            cin >> d;
            if (i+d < n)
                merge(i, i+d);
        }

        int answer = 0;
        vector<bool> check(n);
        for (int i=0; i<n; ++i)
        {
            int index = find(i);
            if (!check[index])
            {
                answer++;
                check[index] = true;
            }
        }

        cout << "Case #" << tc+1 << '\n' << answer << '\n';
    }

    return 0;
}
```



## 2. 이진수

비트셋 $a$, $b$가 있다. $b_i=a_{i-t}|a_{i+t}$이고 $b$가 주어진다.

이진수로 보았을 때 가장 작은 가능한 $a$​를 구하라.

---

$b$가 OR 연산으로 구성되므로 $b$로부터 아래 사실을 알 수 있다.
$$
b_i=0\rightarrow a_{i-t}=0\wedge a_{i+t}=0\\
b_i=1\rightarrow a_{i-t}=1\vee a_{i+t}=1
$$
가장 작은 $a$​만 구하면 되니 그리디하게 풀 수 있다. 왼쪽 비트가 작은 이진수가 더 작다. $b_i=1$​일 때 $a_{i-t}$​와 $a_{i+t}$​가 아직 정해지지 않았다면 $a_{i-t}=0$​​으로 처리하면 된다.

둘 중 하나가 이미 정해졌거나 $b_i=0$이면 조건에 맞게 단순히 처리해준다. $O(N)$​​으로 풀린다.

```cpp
#include <bits/stdc++.h>

using namespace std;
using ll = long long;
using pii = pair<int, int>;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int T;
    cin >> T;
    for (int tc=0; tc<T; ++tc)
    {
        int n, t;
        cin >> n >> t;

        string b;
        cin >> b;

        vector<int> a(n, 2);

        for (int i=0; i<n; ++i)
        {
            if (b[i] == '0')
            {
                if (i >= t)
                    a[i-t] = 0;
                if (i < n-t)
                    a[i+t] = 0;
            }
            else if (b[i] == '1')
            {
                if (i < t && i+t < n)
                    a[i+t] = 1;
                if (i >= n-t && i-t >= 0)
                    a[i-t] = 1;
            }
        }
        for (int i=0; i<n; ++i)
        {
            if (b[i] == '1' && i >= t && i < n-t)
            {
                if (a[i-t] == 0)
                    a[i+t] = 1;
                if (a[i+t] == 0)
                    a[i-t] = 1;
            }
        }
        for (int i=n-1; i>=0; --i)
        {
            if (b[i] == '1' && i >= t && i < n-t)
            {
                if (a[i-t] == 0)
                    a[i+t] = 1;
                if (a[i+t] == 0)
                    a[i-t] = 1;
            }
        }
        for (int i=0; i<n; ++i)
        {
            if (a[i] == 2)
                a[i] = 0;
        }
        for (int i=0; i<n; ++i)
        {
            if (b[i] == '1' && i >= t && i < n-t && a[i-t] == 0 && a[i+t] == 0)
                a[i+t] = 1;
        }

        cout << "Case #" << tc+1 << '\n';
        for (int i : a)
            cout << i;
        cout << '\n';
    }

    return 0;
}
```



## 3. No Cycle

동일한 정점 집합에 대한 방향 간선 집합과 무방향 간선 집합이 주어진다.

무방향 간선의 방향을 정해 그래프를 완성하려 한다. 방향은 비트셋으로 표현한다.

사이클이 생기지 않는 방향 중 사전 순으로 가장 작은 방향을 구하라.

---

정점의 개수 $N<500$, 방향 간선의 개수 $M<2000$, 무방향 간선의 개수 $K<2000$으로 크기가 커 적절한 시간복잡도의 풀이를 찾아야 한다.

방향 간선 집합만을 생각하자. 방향성이 있고 사이클이 없다고 보장되니 DAG를 구성할 수 있다. 무방향 간선의 방향을 정한다는 건 DAG에 간선을 추가하는 거다. 사이클이 없도록 정한다면 DAG에 간선을 추가한 그래프도 DAG다.

문제가 DAG를 유지하며 두 정점을 잇는 쿼리 수행 문제로 바뀌었다. 쿼리를 하나씩 수행할 때, 이전 쿼리 수행에 의해 현재 쿼리 수행이 불가능한 경우가 생기는지 알고 싶다. 생기지 않는다면 그리디로 쉽게 풀어낼 수 있다. 기도한 후 증명에 들어가자.

임의의 두 정점 $u$​, $v$​를 현재 쿼리의 입력이라 하자. $u\rightarrow v$​로 이었을 때 사이클이 생긴다면 $v\rightarrow u$​인 경로가 이미 존재하는 거다. $v\rightarrow u$​로 이었을 때도 마찬가지로 사이클이 생긴다면 $u\rightarrow v$​​인 경로가 존재한다. 쿼리 수행이 불가능하다면 $v\rightarrow u$​인 동시에 $u\rightarrow v$​​이므로 그 자체로 사이클이다. DAG에 모순되므로 쿼리는 항상 수행할 수 있다.

따라서 그리디하게 풀 수 있다. 항상 정방향으로 이을 수 있는지 확인한다. 불가능하면 그냥 역방향으로 잇는다. DFS로 사이클을 검사하면 $O(K(N+M+K))$​로 풀린다.

문제를 처음 보았을 때 대회 끝까지 못 풀 것 같단 느낌이 들었다. 실제로 좀 헤맸다. 그리디가 성립하는 걸 알기 힘들었다. 지나고 보니 사전순으로 가장 작도록 하라는 게 일종의 힌트였다. 2번처럼 그리디하게 풀라는 암시다.

```cpp
#include <bits/stdc++.h>

using namespace std;
using ll = long long;
using pii = pair<int, int>;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int T;
    cin >> T;
    for (int tc=0; tc<T; ++tc)
    {
        int n, m, k;
        cin >> n >> m >> k;

        vector<vector<int>> edges(n);

        for (int i=0; i<m; ++i)
        {
            int a, b;
            cin >> a >> b;
            a--; b--;
            edges[a].push_back(b);
        }

        vector<bool> visited(n);
        function<bool (int, int)> dfs = [&] (int start, int end)
        {
            if (start == end)
                return true;
            
            visited[start] = true;
            for (int next : edges[start])
            {
                if (visited[next])
                    continue;
                if (dfs(next, end))
                    return true;
            }
            return false;
        };

        cout << "Case #" << tc+1 << '\n';
        for (int i=0; i<k; ++i)
        {
            int a, b;
            cin >> a >> b;
            a--; b--;

            visited.assign(n, false);
            if (dfs(b, a))
            {
                edges[b].push_back(a);
                cout << 1;
            }
            else
            {
                edges[a].push_back(b);
                cout << 0;
            }
        }
        cout << '\n';
    }

    return 0;
}
```



## 4. 예약 시스템

$2M$​​​명의 사람들을 $2\times M$​​​​​​ 호텔에 배치한다. 각 사람은 $N$​개의 그룹 중 하나에 속한다.

각 그룹은 5명 이상이다. 그룹끼리는 인접하게 배치한다.

만약 다른 그룹 사람 둘이 인접한다면 고유한 $w_i+w_j$만큼 스트레스가 발생한다.

스트레스의 합을 최소화하고 그 값을 구하라.

---

장황한 문제 설명에 비해 간단한 그리디로 열심히 구현하면 풀리는 문제다.

1. $2\times K$​​​​​ 형태로 배치하는 게 최적이다.
2. 스트레스 지수가 작은 사람들을 그룹 바깥쪽에 배치하는 게 최적이다.
3. 끝에 배치했을 때 최대 효과인 그룹을 양 끝에 배치하는 게 최적이다.

위 당연한 사실을 지키며 스트레스 값만 누적시키면 답을 구할 수 있다.

홀수 그룹은 $2\times K$​​ 형태로 배치가 불가능하다. 하지만 홀수 그룹이 짝수 개라면 맞물리게 배치해 $2\times K$​​​​ 형태로 만들 수 있다. 사람 수가 짝수이므로 홀수 그룹은 항상 짝수 개다.

하지만 주의해야 하는 엣지 케이스가 있다. 홀수 그룹이 정확히 2개 있고 충분히 스트레스가 커서 양 끝에 배치하는 경우다. 이때 짝수 그룹은 $2\times K$​​​​​ 형태를 만들 수 없다. 비틀리게 배치해야 하므로 스트레스를 잘 계산해야 한다.

시간복잡도는  $O(N\log N+M\log M)$​​​​​​​​​​이다. 개인적인 취향으로 우선순위 큐를 사용했는데, 배열과 정렬로 대신하면 시간을 커팅할 수 있을 거다. 코드는 복잡해지겠지만 정렬도 안 쓸 수 있겠다.

```cpp
#include <bits/stdc++.h>

using namespace std;
using ll = long long;
using pii = pair<int, int>;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int T;
    cin >> T;
    for (int tc=0; tc<T; ++tc)
    {
        int n, m;
        cin >> n >> m;

        int odd = 0;
        priority_queue<pii> pq;
        vector<int> l(n), w, full(n), wall(n);
        for (int i=0; i<n; ++i)
        {
            cin >> l[i];
            odd += l[i]%2;
            w.resize(l[i]);
            for (int& x : w)
                cin >> x;
            sort(w.begin(), w.end());

            if (l[i]%2)
            {
                full[i] = w[0] * 2 + w[1] + w[2] + w[3];
                wall[i] = w[0] * 2 + w[1];
            }
            else
            {
                full[i] = w[0] + w[1] + w[2] + w[3];
                wall[i] = w[0] + w[1];
            }
            pq.emplace(full[i] - wall[i], i);
        }
        w.clear();

        int wl, wr;
        ll answer = 0;
        wl = pq.top().second;
        pq.pop();
        wr = pq.top().second;
        for (int i=0; i<n; ++i)
        {
            if (i == wl || i == wr)
                answer += wall[i];
            else
                answer += full[i];
        }

        // edge case
        if (odd == 2 && n > 2 && l[wl]%2 == 1 && l[wr]%2 == 1)
        {
            for (int i=0; i<n; ++i)
            {
                if (l[i]%2 == 0)
                    answer += wall[i];
            }

            ll test = 0;
            while (l[pq.top().second]%2 == 1)
                pq.pop();
            wr = pq.top().second;
            for (int i=0; i<n; ++i)
            {
                if (i == wl || i == wr)
                    test += wall[i];
                else
                    test += full[i];
            }

            answer = min(answer, test);
        }

        cout << "Case #" << tc+1 << '\n' << answer << '\n';
    }

    return 0;
}
```



## 5. 차이

정수 $X_i$​들에 대해 두 가지 쿼리를 수행하라.

1. $X_i-X_j=K$​​​​​라는 정보를 받는다.

2. 주어진 정보에 따라 $X_i-X_j$​​를 출력한다.

정보가 부족하거나 모순인 경우도 존재한다.

---

$X_i-X_j$​가 주어지고 $X_j-X_k$​가 주어지면 $X_i-X_k$​​​​​​​​​도 알 수 있다. 1번과 유사한 느낌이 든다. 실제로 서로소 집합으로 풀 수 있다.

차이를 구할 수 있는지, 즉 정보가 충분한지는 연결 여부로 쉽게 알 수 있다. 차이를 구하는 게 관건이다. 서로소 집합 내에서 차이 값을 잘 관리해야 한다.

$X_i-X_j=K$​가 주어지면 $X_i$​와 $X_j$​를 연결하고 간선의 가중치를 $K$​​​​​​​로 두어 차이를 저장한다. 최적화를 위해 경로 압축을 할 때 간선이 변화하므로 가중치도 함께 압축해야 한다. 최종적으로 집합의 루트에 대한 차이를 알 수 있다.
$$
X_i-X_j=X_i-X_{root} - (X_j-X_{root})
$$
너무나 자명하다. 이제 루트에 대한 차이로 집합 내 모든 원소 사이의 차이를 구할 수 있다.

정보가 모순인 경우는 처리가 간단하다. 주어진 정보와 이미 알고 있는 정보가 같은지만 확인하면 된다. 만약 정보가 충돌한다면 사이클이 발생하므로 집합 전체를 모순 처리한다.

경로 압축만 사용한 서로소 집합이므로 시간복잡도는 $O(K\log N)$​​이다. 경로 압축이나 머지할 때 가중치를 다루는 게 꽤 헷갈렸다. 특히 머지 부분이 완전 날림이라 Proof by AC다.

```cpp
#include <bits/stdc++.h>

using namespace std;
using ll = long long;
using pii = pair<int, int>;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int T;
    cin >> T;
    for (int tc=0; tc<T; ++tc)
    {
        int n, k;
        cin >> n >> k;

        vector<int> parent(n), to(n);
        vector<bool> cfcheck(n);

        for (int i=0; i<n; ++i)
            parent[i] = i;

        function<int (int)> find = [&] (int i)
        {
            if (parent[i] == i)
                return i;
            else
            {
                const int x = find(parent[i]);
                to[i] += to[parent[i]];
                return parent[i] = x;
            }
        };

        auto merge = [&] (int a, int b)
        {
            a = find(a);
            b = find(b);
            if (a != b)
            {
                parent[a] = b;
                if (cfcheck[a])
                    cfcheck[b] = true;
            }
        };

        cout << "Case #" << tc+1 << '\n';
        for (int i=0; i<k; ++i)
        {
            int query;
            cin >> query;

            if (query == 1)
            {
                int a, b, d;
                cin >> a >> b >> d;
                a--; b--;
                if (a > b)
                {
                    swap(a, b);
                    d = -d;
                }
                if (find(a) != find(b))
                {
                    int old = find(a);
                    int oldto = to[a];
                    merge(a, b);
                    to[a] = to[b] + d;
                    parent[a] = parent[b];
                    to[old] = to[a] - oldto;
                }
                else if (d != to[a] - to[b])
                    cfcheck[find(a)] = true;
            }
            else if (query == 2)
            {
                int a, b;
                cin >> a >> b;
                a--; b--;
                if (find(a) == find(b))
                {
                    if (cfcheck[find(a)])
                        cout << "CF";
                    else
                        cout << to[a] - to[b];
                }
                else
                    cout << "NC";
                cout << '\n';
            }
        }
        cout << '\n';
    }

    return 0;
}
```

&nbsp;

Round 2 전날에 이 글을 쓴다. Round 1 후기인데 Round 2 전에는 써야 할 것 같았다. 벌써 새벽이다. 아침부터 Round 2가 있으니 빨리 자러 가야겠다.

글을 쓰면서 코드를 다시 살펴보니 부끄럽다. 그래도 대회 코드는 날것을 첨부하는 게 의미 있다고 생각한다. 앞으로도 대회 코드는 AC 받은 코드를 그대로 올릴 생각이다.

