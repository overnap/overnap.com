---
title: 바텀업 세그먼트 트리와 교환법칙 (금광 세그)
date: 2022-01-25
tags:
  - algorithm
  - data structure
published: true
---

바텀업 세그먼트 트리는 탑다운 구현에 비해 코드가 짧고 속도가 빠르다. 하지만 복잡한 연산을 위한 확장이 불편하거나, 혹은 잘 알려지지 않아서 인기가 없는 편이다.

물론 금광 세그에 대한 한국어 자료도 본 적이 없다. 한국에서는 교환법칙이 성립하지 않는 세그먼트 트리를 [BOJ 10167 금광](https://www.acmicpc.net/problem/10167)에서 따와 금광 세그라고 부른다. [참고](https://anz1217.tistory.com/133) 세그먼트 트리는 모노이드에 관한 자료구조여서 교환법칙이 성립하지 않아도 된다. [참고](https://hyperbolic.tistory.com/3)

바텀업 금광 세그는 아주 간단하게 구현할 수 있다. 우선 기본 코드를 보자.

```cpp
struct seg {
  struct node {
    ll lo, hi, sum, val;
  };

  int n;
  vector<node> tree;

  static node op(const node &a, const node &b) {
    return {max(a.lo, a.sum + b.lo), max(b.hi, b.sum + a.hi), a.sum + b.sum,
            max({a.hi + b.lo, a.val, b.val})};
  }

  void update(int x, ll v) {
    tree[x += n] = {tree[x].val + v, tree[x].val + v, tree[x].val + v,
                    tree[x].val + v};
    for (x /= 2; x > 0; x /= 2)
      tree[x] = op(tree[x * 2], tree[x * 2 + 1]);
  }
};
```

사실 금광 문제는 업데이트 함수만 필요해서 여기까지만 짜도 괜찮다. 바텀업 세그와 금광 세그를 짜본 사람이라면 어렵지 않은 코드일 것이다.

[BOJ 16997 히스토그램에서 가장 큰 직사각형과 쿼리](https://www.acmicpc.net/problem/16977)는 범위에 대한 쿼리가 있어서 쿼리 함수를 구현해야 한다.

```cpp
// wrong implementation
node query(int l, int r) {
    node ret{ 0, 0, 0, 0 };
    for (l+=n, r+=n; l<=r; l/=2, r/=2) {
        if (l%2)
            ret = op(tree[l++], ret);
        if (r%2 == 0)
            ret = op(tree[r--], ret);
    }
    return ret;
}
```

이건 잘못된 구현으로 교환법칙이 성립해야만 작동한다. 여기서 `ret` 에 값을 누적하는 과정을 잘 보자. 왼쪽과 오른쪽에서 각각, 바깥쪽부터 안쪽으로 값을 누적하고 있다. 이 부분만 잘 고치면 된다. 왼쪽과 오른쪽 누적값을 분리하고, 누적 자체도 좌우 순서를 지키자.

```cpp
// right implementation
node query(int l, int r) {
    node retl{ 0, 0, 0, 0 }, retr = retl;
    for (l+=n, r+=n; l<=r; l/=2, r/=2) {
        if (l%2)
            retl = op(retl, tree[l++]);
        if (r%2 == 0)
            retr = op(tree[r--], retr);
    }
    return op(retl, retr);
}
```

잘 작동한다.
