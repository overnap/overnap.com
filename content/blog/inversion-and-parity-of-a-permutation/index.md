---
title: Inversion과 순열의 기우성
date: 2022-02-28
tags:
  - algorithm
  - mathematics
published: true
---

최근 코드포스가 뜸해서 앳코더를 시작했다. [ARC 136 B](https://atcoder.jp/contests/arc136/tasks/arc136_b)를 풀었다.

수열의 연속된 세 값 $a_i, a_{i+1}, a_{i+2}$를 $a_{i+2}, a_i, a_{i+1}$로 바꾸는 shift 연산을 써서 수열 A를 B로 만들 수 있는지 묻는 문제다.

내 풀이는 $O(N^2)$인데, 에디토리얼을 보니 $O(N\log{N})$까지 가능하다. shift 연산이 inversion count를 정확히 2만큼 변화시키기 때문에 inversion count의 홀짝에 대해 닫혀 있다. A와 B의 inversion count를 세는 문제로 바뀌므로 펜윅 트리 등을 사용하면 $O(N\log{N})$에 풀린다. 같은 수가 있다면 shift 연산이 홀짝을 바꿀 수 있어 항상 가능함을 주의해야 한다.

컨테스트가 끝나고 solved.ac 디스코드에서 고인물이 거의 동일한 문제인 [백준 5000 빵 정렬](https://www.acmicpc.net/problem/5000)을 갖고 왔다. 또 다른 고인물은 그걸 보고 단번에 inversion count의 기우성(홀짝성) 불변량임을 알아챈다. 애드혹인 줄 알았는데 유명한 토픽이란다. 나만 모르는 웰노운인가 싶어 정리한다.

Inversion count의 기우성은 곧 순열의 기우성이다.

우선 swap 연산을 살펴보자. 순열의 어떤 인덱스 $i$, $j$의 값을 swap한다. 이때 inversion count는 어떤 영향을 받을까?

일단 $(i, j)$는 inversion이 뒤바뀔 것이다. $i$보다 작거나 $j$보다 큰 인덱스는 영향을 받지 않는다. 그리고 $i<k<j$인 $k$는 $(i, k)$와 $(k, j)$가 짝을 이루므로 짝수 개 만큼의 inversion이 변화할 것이다. 따라서 swap 연산은 항상 inversion count의 홀짝을 바꾼다.

위 문제의 shift 연산은 $a_{i+1}$과 $a_{i+2}$를 swap, $a_{i+2}$와 $a_i$를 swap하는 2번의 swap으로 표현할 수 있다. 곧 같은 값이 없다면 shift 연산을 해도 inversion count의 기우성은 불변한다.

![well-known](./well-known.png)

빵 정렬은 $O(N)$에 풀이할 수도 있다. 좀 더 나아가보자.

어떤 순열을 trivial한 순열(1, 2, 3...)로부터 swap을 통해 만든다고 하자. 이때 어떠한 순서로 swap하든 swap 연산 횟수의 기우성이 변하지 않는다는 걸 알 수 있다. 즉 순열이 결정되면 이러한 기우성도 결정된다. 이걸 순열의 기우성이라 한다.

순열의 값 $a_x$에 대해 $f(x)=a_x$를 정의하면 $f(x)$의 합성이 사이클을 가진다는 건 잘 알려진 사실이다. 잘 생각해보면 사이클은 trivial한 순열로부터 어떤 순열이 이루어지기까지 swap한 인덱스끼리 구성된다는 걸 알 수 있다. 순열 1, 2, 3...은 모든 사이클의 길이가 1인 것을 상기하자.

그러므로 어떤 순열은 사이클로 분해할 수 있고 더 잘게 swap 연산으로 분해할 수도 있다. 이때 주기가 k인 사이클을 구성하는 swap 연산의 개수는 k-1이므로, 짝수 길이 사이클 개수의 홀짝이 곧 순열의 홀짝이다. 이건 $O(N)$으로 간단하게 구할 수 있다.

요약하면 다음과 같다:

순열의 기우성은 transposition 분해의 길이의 기우성이자 inversion number의 기우성이다.

### Reference

[순열의 홀짝성 - 카탄 블로그](https://blog.naver.com/hunterblack/221313159075)

[순열 - 위키피디아 한글](https://ko.wikipedia.org/wiki/%EC%88%9C%EC%97%B4#%ED%98%B8%ED%99%98_%EB%B6%84%ED%95%B4)
