---
title: 공변성(Covariance)과 반공변성(Contravariance)
date: 2021-09-03
tags:
  - category theory
  - programming language
published: true
---



타입을 다루다 보면 필연적으로 variance와 마주치게 된다. 그러다 보니 많은 사람이, variance가 무엇인지 모르더라도, 그것을 선험적으로 알고 있다. 그럼에도 variance를 정확히 이해하는 건 중요하다고 생각한다.

이번 글에서는 공변성(covariance)과 반공변성(contravariance)에 대해 알아본다.



## Covariance

OOP에서 상속을 이야기할 때 흔히 쓰이는 예제가 있다. `Animal` 타입이다.

`Cat`이 `Animal`의 subtype이라 하자. 즉 `Cat` <: `Animal`이다.

여기 immutable한 배열 타입 `ReadOnlyArray<Cat>`이 있다. 우리는 이것을 `ReadOnlyArray<Animal>`로 취급할 수 있다. 당연하다. `Cat`은 `Animal`로 읽을 수 있기 때문이다.

다시 말해 `ReadOnlyArray<Cat>` <: `ReadOnlyArray<Animal>`이다.

이럴 때 `ReadOnlyArray<T>`는 covariant하다고 말한다. 일반화하면 다음과 같다:

> 어떤 generic type `F<T>`에 대해,
>
> `A` <: `B`일 때 `F<A>` <: `F<B>`를 만족하면 `F<T>`는 covariant하다.

C#의 `IEnumerable<T>`가 대표적인 예다. 열거 가능 인터페이스는 `IEnumerable<Derived>` <: `IEnumerable<Base>`를 만족한다. 아래 C# 코드에서 일어나는 암시적 변환을 보자.

```cs
object obj = "test string"; // ok
IEnumerable<string> strings = new List<string>();
IEnumerable<object> objects = strings; // ok
```

1번 라인은 `string` <: `object`이므로 안전하다. `IEnumerable<T>`가 covariant하기 때문에, 3번 라인도 `IEnumerable<string>` <: `IEnumerable<object>`이므로 안전하다. 따라서 할당 가능하다.



## Contravariance

이번에는 함수 타입 `Calc<T>`가 있다. `Calc<T>`는 계산만 하는 함수여서, `T`를 인자로 받고 unit type `void`를 반환하는 `T -> void` 함수라 하자.

당연히 `Calc<Cat>`은 `Calc<Animal>`로 취급할 수 없다. 즉 covariant하지 않다.

어떤 `Calc<Cat>`이 입력받은 고양이의 수염 길이를 참조한다. 이것을 `Calc<Animal>`로 취급한다면, 수염이 없는 `Animal`를 입력할 때 오류가 발생할 거다.

반대의 경우는 어떨까? Subtype 관계를 잘 생각해보면, `Calc<Animal>`은 `Calc<Cat>`으로 취급할 수 있다. `Animal`에서 참조할 수 있는 건 `Cat`에서도 참조할 수 있기 때문이다.

곧 `Calc<Animal>` <: `Calc<Cat>`이다. 이럴 때 contravariant하다고 한다.

> 어떤 generic type `F<T>`에 대해,
>
> `A` <: `B`일 때 `F<B>` <: `F<A>`를 만족하면 `F<T>`는 contravariant하다.

Subtype이 그대로 따라오는 covariant와 다르게 subtype 관계가 뒤집힌다. 그래서 contravariant(반공변하는, 반변하는)이다.

C#의 `Action<T>`가 contravariant한 예이다. `Action<Base>` <: `Action<Dervied>`를 만족한다.

```cs
Action<object> actObject = delegate(object o) { };
Action<string> actString = actObject; // ok
```

2번 라인에서 `Action<object>` <: `Action<object>`이므로 할당 가능하다.



## Covariance vs. Contravariance

그래서 어떤 타입이 covariance고 contravariance인가?

생산자는 covariant하고, 사용자는 contravariant하다는 [유명한 예시](https://stackoverflow.com/a/19739576)가 있다. 상술한 예시를 다시 살펴보자. `ReadOnlyArray<T>`에서는 `T`의 정보를 생산한다. `Calc<T>`에서는 `T`의 정보를 사용한다.

관건은 함수에 있다. 함수의 인자는 사용되고, 반환값은 생산된다.

함수 타입 `Function<A, B>`가 있다. `A`를 인자로 받고 `B`를 반환하는 `A -> B` 함수다. `Function<A, B>`는 `A`에 대해 contravariant하고 `B`에 대해 covariant하다. 따로 예시를 들진 않겠지만 자연스러운 사실이다.

> 어떤 함수, 곧 generic type `A -> B`는
>
> `A`에 대해 contravariant하고 `B`에 대해 covariant하다.

재미있는 점이 하나 있다. `T`에 대해 contravariant한 타입에 또 contravariant하다면, `T`에 대해 covariant하다는 사실이다. 즉 `Function<Function<A, void>, void>`는 `A`에 대해 covariant하다.

프로그래밍 언어에서 쓰이는 variance는 범주론(category theory)의 함자(functor)에서 출발한 개념이다. Functor에는 일반적인(covariant) functor와 contravariant functor가 있는데, 간단히 설명하자면 대응시키는 사상의 방향만 다르다. (Functor에 대해선 다른 글에서 자세히 다루도록 하자.)

Contravariance에 의해 반전된 사상을 다시 반전하면 원래 방향을 갖는다. 프로그래밍 언어에서도 동일하다. Contravariant한 타입을 짝수 번 중첩하면 subtype 관계는 정방향이다. 즉 covariant하다.

Contravariant만 주의하면 된다. Covariant는 중첩해도 covariant하다. Covariant를 + 부호로, contravariant를 - 부호로 생각하면 쉽다.

언어마다 covariance와 contravariance를 표현하는 방법이 다른데, C#처럼 `out`과 `in`로 표현하는 언어는 함수의 출력과 입력 관점을 강조한다면, Scala처럼 `+`와 `-`로 표현하는 언어는 Contravariance의 사상 반전을 강조하는 것 같다.

프로그래밍을 하다 보면 covariant 타입과 contravariant 타입을 중첩하는 일이 꽤 있다. 타입이 복잡해지면 covariant인지 contravariant인지 헷갈린다. 이럴 때 함수 입출력의 위치와 contravariant가 중첩된 횟수를 잘 살펴보도록 하자.

여기서 이런 생각을 할 수 있다. Covariant하지 않으면 contravariant한가? 그렇진 않다.



## Invariance

위에서 immutable한 배열은 covariant하다고 했다. 만약 mutable한 배열 타입이라면 어떨까?

일반적인 배열 타입 `Array<Cat>`가 있다. 이걸 `Array<Animal>`로 취급하면 문제가 생긴다.

배열에 쓰는 과정을 생각해보자. `Array<Cat>`에는 `Cat`만 넣을 수 있다. `Array<Animal>`은 어떤 `Animal`이든 모두 넣을 수 있다. `Array<Cat>`을 `Array<Animal>`로 취급하면, `Cat`이 아닌 다른 `Animal`을 넣는 일이 생긴다. `Array<Cat>`에 `Dog`을 넣을 수는 없다.

C# 예제로 살펴보자. C#의 배열 타입은 covariant하다. 방금 문제가 생긴다고 하지 않았나? 실제로 문제를 발생 시켜 보자.

```cs
string[] strings = new string[8];
object[] objects = strings; // ok...?
objects[0] = 0; // runtime error
```

배열 타입이 covariant하므로 2번 라인은 문제가 없다. 하지만 3번 라인이 좀 이상하다. 문자열 배열에 숫자를 할당할 수는 없는 노릇 아닌가. 하지만 컴파일엔 문제가 없다.

프로그램을 실행시켜보자. 3번 라인에서 `ArrayTypeMismatchException`이 발생한다. 런타임에서 잡아내는 거다. 배열 타입이 covariant해서 발생하는 type unsafe다.

반대로 `Array<Animal>`을 `Array<Cat>`으로 취급해도 문제가 생긴다. 모든 `Animal`을 `Cat`으로 취급하다니. 아주 큰 문제일 거다.

그러므로 `Array<T>`는 `T`에 대해 covariant하지도, contravariant하지도 않다. 즉 변하지(variant) 않는다. 이럴 때 불변(invariant)하다고 한다. `T`의 supertype도 안되고 subtype도 안된다. 정확히 `T`여야 한다.

C#의 `IList<T>`는 invariant하다. 아래 예시는 컴파일 에러를 일으킨다.

```cs
IList<string> strings = new List<string>();
IList<object> objects = strings; // compile error
```

`IList<T>`의 메소드 `Add(T)`는 `T`를 인자로 받는다. 즉 `T`에 대해 contravariant하다. `IList<T>`는 `IEnumerable<T>`를 상속하므로 covariant한 측면이 있다. 따라서 covariance와 contravariance가 모두 깨져 invariant하다.



## Bivariance & Typescript

아주 특이한 경우로 bivariant한 타입이 있다. Covariant하면서 contravariant하다니, 잘 상상이 가지 않는다.

어떤 상수 타입 `Const<T>`가 있다. `Const<T>`는 `T`에 무엇이 오든 상수만 갖는다. 다시 말해 `void -> number` 함수다.

`T`가 전혀 쓰이지 않는다. `Const<Cat>` <: `Const<Animal>`인 동시에 `Const<Animal>` <: `Const<Cat>`이다. 그러므로 `T`에 대해 covariant하면서 contravariant하다.

이번에는 타입스크립트 예제다. 타입스크립트를 잘 모르더라도 쉽게 이해할만한 코드다.

```typescript
type Const<T> = number

let x: Const<string> = 3
let y: Const<number[]> = x // ok
```

사실 bivariant한 타입을 써볼 일은 잘 떠오르지 않고, 만들었던 적도 없다. 굳이 생각해보자면 어떤 placeholder가 필요할 때 사용할 수 있겠다. 직접 볼 일은 거의 없다.

그런데 타입스크립트에서 bivariance를 손쉽게 체험해볼 수 있다. 컴파일러 옵션에서 `strict`를 끄면 된다.

충격적이게도 Typescript 2.6 이전에는 함수의 인자가 bivariant했다. 2.6에서 strict flag에 `strictFunctionTypes`가 추가되면서 contravariant하게 바뀌었다. 지금도 `strictFunctionTypes` 옵션을 끄면 함수 인자를 bivariant하게 취급한다.

[여기서](https://github.com/microsoft/TypeScript/pull/18654) 관련 풀 리퀘스트를 볼 수 있다.

`strict` 옵션을 조정해가면서 아래 예제를 실행해보자.

```typescript
interface Animal {}
interface Cat extends Animal { nyan: string }

let f: (x: Animal) => void = (x: Cat) => {} // error with strictFunctionTypes
```

타입스크립트에 익숙하지 않은 사람들을 위해: `nyan: string`이 없으면 `strict`가 켜져 있어도 잘 작동하는데, 그 이유는 타입스크립트의 [구조적 타이핑(structural typing)](https://www.typescriptlang.org/docs/handbook/type-compatibility.html)에 있다.



## 참고 문헌

- [MS Docs, 공변성(Covariance) 및 반공변성(Contravariance)(C#)](https://docs.microsoft.com/ko-kr/dotnet/csharp/programming-guide/concepts/covariance-contravariance/)

- [Wikipedia, Covariance and contravariance (computer science)](https://en.wikipedia.org/wiki/Covariance_and_contravariance_(computer_science))

- [Tomas Petricek, The theory behind covariance and contravariance in C# 4](http://tomasp.net/blog/variance-explained.aspx/)

- [Damhiya, Functor and Variance](https://damhiya.github.io/posts/Functor-and-Variance.html)


