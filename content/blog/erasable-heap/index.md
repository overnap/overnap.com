---
title: 삭제 가능한 힙
date: 2023-12-31
tags:
  - algorithm
  - data structure
published: true
---

알고리즘 문제를 풀다 보면 최대 혹은 최소를 구할 일이 정말 많다. 특히 대상 원소가 계속 바뀌면 `std::set`, `std::multiset`, `std::priority_queue`, 혹은 세그먼트 트리 등의 이진 트리를 사용한다.

​	

보통 문제 풀이 중 빠른 구현을 위해 STL의 구현체를 자주 쓰게 된다. (다들 그럴 거라고 믿는다.)

그중 힙은 매우 빠르고, 간편하며, 중복 원소를 다룰 수 있어 유용하다. 다만 임의의 원소를 삭제하는 연산이 없어서 불편할 때가 있는데, 아래처럼 힙을 2개 사용하면 간단하게 삭제 연산을 만들 수 있다.

```cpp
priority_queue<int> pq, eraser;

pq.push(x); // insert
eraser.push(x); // erase

// do it before accessing the `pq`
while (!eraser.empty() && eraser.top() == pq.top())
    pq.pop(), eraser.pop();
```

​	

>  그냥 `std::set` 쓰면 되지 않나요?

맞다. 근데 난 힙이 더 좋다.

일단 힙은 매우 빠르다. `std::set`과 `std::priority_queue`는 모두 연산이 $O(\log{N})$이지만 보통 2배 이상의 시간 차이가 난다. `std::set`은 느리기로 유명하고 `std::priority_queue`는 빠르기로 유명하다.

그리고 간편하다. 솔직히 문제 풀이할 때 iterator하고 씨름하는 건 짜증 난다. `std::multiset` 쓸 생각 하면 벌써 답답하다.

또 삭제 시점을 제어할 수 있다는 게 종종 유용할 때도 있다.

​	

최대 최소만 필요하다면 `std::set` 대신 힙을 써보는 게 어떨까? 츄라이!	

기회가 된다면 meldable heap에 대해서도 글을 써보겠다.

