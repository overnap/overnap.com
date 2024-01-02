---
title: 트리 위의 누적합
date: 2022-04-06
tags:
  - algorithm
published: true
---

누적합 (prefix sum) 은 고난도 문제에서 예상치 못한 쓰임새로 뒤통수를 치곤 한다. 트리 위에서 누적합을 사용하는 유형에 대해 알아보자.

​	

[BOJ 12746 Traffic (Large)](https://www.acmicpc.net/problem/12746)

트리 위 두 노드 사이의 최단 거리 간선에 값을 누적하는 쿼리 문제이다.

쿼리는 오프라인으로 처리해도 괜찮다. 그러면 LCA (Lowest Common Ancestor) 와 누적합을 활용해서 간단하게 처리할 수 있다.

쿼리할 노드 $u$, $v$와 두 노드의 LCA $t$를 생각하자. $psum[u]$와 $psum[v]$에 1을 더하고 $psum[t]$에 2를 뺀다. 이렇게 모든 쿼리를 처리한 후 부모 방향으로 propagate한다. 그러면 $psum[x]$를 $x$와 그 부모 사이 간선의 값이라고 볼 때, $u \rightarrow t$와 $v \rightarrow t$ 사이 간선에만 영향을 줄 것이다.

각 쿼리는 LCA를 구하는 방법에 따라 $O(1)$ 혹은 $O(\log{N})$이 걸린다. 전처리가 $O(N\log{N})$, propagate는 $O(N)$이므로 전체 시간복잡도는 $O(Q+N\log{N})$이다.

사실 전형적인 오일러 투어 테크닉에서 세그먼트 트리를 누적합으로 바꾼 거다. 따라서 실시간으로 풀고 싶다면 ETT로 쿼리당 $O(\log{N})$에 가능하다.

​	

[BOJ 11960 Max Flow](https://www.acmicpc.net/problem/11960)

간선이 아닌 노드에 쿼리한다. 끝점을 처리하는 방법을 조금 바꾸어 보자.

​	

[BOJ 24889 통행량 조사](https://www.acmicpc.net/problem/24889)

간선이 $N$개이므로 그래프가 단 한 개의 사이클과 사이클에 연결된 트리들로 구성돼 있다. 위와 같이 처리하되 사이클을 거치는 경우를 case work 해주자.

