# Tutorial.Javascript.DreamCoding

Javascript 학습 - 6개월이상 사용하지 않았을때 다시 한번 보아야함.



### [자바스크립트 기초 강의 (ES5+): 같이 노트를 작성하며 배워요](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)





### Callback 함수의 정의 

JavaScript에서 콜백 함수(callback function)는 다른 함수에 인자로 전달되어, 해당 함수가 실행을 마쳤을 때 호출되는 함수를 말합니다. 

콜백 함수는 주로 비동기적인 작업에서 사용되며, 이벤트 처리, 타이머 함수, HTTP 요청 등에서 많이 활용됩니다.



![image](https://github.com/krdn/Tutorial.Javascript.DreamCoding/assets/5511718/ad61e213-b2f9-4864-b095-1d5c25593f22)


## 생활코딩 강좌

JavaScript에서 콜백 함수(callback function)는 다른 함수에 인자로 전달되어, 해당 함수가 실행을 마쳤을 때 호출되는 함수를 말합니다. 콜백 함수는 주로 비동기적인 작업에서 사용되며, 이벤트 처리, 타이머 함수, HTTP 요청 등에서 많이 활용됩니다.

https://www.youtube.com/playlist?list=PLuHgQVnccGMBVQ4ZcIRmcOeu8uktUAbxI

- **[JavaScript - callback](https://www.youtube.com/watch?v=TAyLeIj1hMc&list=PLuHgQVnccGMBVQ4ZcIRmcOeu8uktUAbxI&index=1&pp=iAQB)**
- **[JavaScript - Promise (then, catch)](https://www.youtube.com/watch?v=Sn0ublt7CWM&list=PLuHgQVnccGMBVQ4ZcIRmcOeu8uktUAbxI&index=2&t=1s&pp=iAQB)**
- **[JavaScript - async & await](https://www.youtube.com/watch?v=1z5bU-CTVsQ&list=PLuHgQVnccGMBVQ4ZcIRmcOeu8uktUAbxI&index=3&pp=iAQB)**
- **[JavaScript Promise 2 - new Promise](https://www.youtube.com/watch?v=PasFh_t1mhY&list=PLuHgQVnccGMBVQ4ZcIRmcOeu8uktUAbxI&index=4&pp=iAQB)**
- **[JavaScript Promise All | Race - 동시작업을 단순하게!](https://www.youtube.com/watch?v=a5AzftkvW9U&list=PLuHgQVnccGMBVQ4ZcIRmcOeu8uktUAbxI&index=5&pp=iAQB)**


# callback 함수

## JavaScript
에서 콜백 함수(callback function)는 다른 함수에 인자로 전달되어, 해당 함수가 실행을 마쳤을 때 호출되는 함수를 말합니다. 콜백 함수는 주로 비동기적인 작업에서 사용되며, 이벤트 처리, 타이머 함수, HTTP 요청 등에서 많이 활용됩니다.

콜백 함수는 함수의 매개변수(parameter)로 전달되거나, 함수의 내부에서 호출될 수 있습니다. 다음은 간단한 콜백 함수의 예시입니다:

```jsx
function doSomethingAsync(callback) {
  // 비동기 작업 수행, 예를 들면 타이머 함수를 사용
  setTimeout(function () {
    console.log("Async task done");
    // 콜백 함수 호출
    callback();
  }, 1000);
}

function callbackFunction() {
  console.log("Callback function called");
}

// doSomethingAsync 함수 호출과 함께 콜백 함수 전달
doSomethingAsync(callbackFunction);
```

위의 예시에서 **`doSomethingAsync`** 함수는 비동기 작업을 수행하고, 작업이 완료되면 전달된 콜백 함수를 호출합니다. **`setTimeout`** 함수를 사용하여 1초 후에 "Async task done"을 출력하고, 그 후에 **`callbackFunction`**이라는 콜백 함수를 호출합니다.

콜백 함수는 함수 자체의 완료와는 독립적으로 실행되며, 비동기적인 환경에서 특히 유용합니다. 이를 통해 코드의 효율성을 높이고 비동기적인 작업을 조절할 수 있습니다.

## C#
에서도 JavaScript와 마찬가지로 콜백 함수(concept)을 사용할 수 있습니다. C#에서 콜백 함수는 일반적으로 대리자(Delegate)나 이벤트(Event)를 통해 구현됩니다. 대리자는 메서드를 가리킬 수 있는 형식이며, 이벤트는 대리자의 특별한 형태로, 특정 이벤트에 대해 연결된 메서드들을 호출할 수 있습니다.

다음은 C#에서 콜백을 구현하는 간단한 예시입니다:

```csharp
using System;

// 대리자 정의
public delegate void CallbackDelegate();

public class CallbackExample
{
    // 콜백을 받아 실행하는 메서드
    public void PerformActionWithCallback(CallbackDelegate callback)
    {
        Console.WriteLine("Performing some action...");
        // 작업 완료 후 콜백 호출
        callback();
    }
}

public class Program
{
    // 콜백으로 실행될 메서드
    public static void MyCallback()
    {
        Console.WriteLine("Callback executed!");
    }

    public static void Main()
    {
        CallbackExample example = new CallbackExample();

        // 콜백으로 사용될 메서드를 대리자에 등록
        CallbackDelegate callbackDelegate = new CallbackDelegate(MyCallback);

        // 메서드 호출 시 콜백 실행
        example.PerformActionWithCallback(callbackDelegate);
    }
}
```

이 예시에서 **`CallbackDelegate`**는 콜백을 위한 대리자를 정의하고, **`CallbackExample`** 클래스의 **`PerformActionWithCallback`** 메서드는 이 대리자를 매개변수로 받아 작업을 수행한 후 콜백을 호출합니다. **`Program`** 클래스에서는 콜백으로 사용될 메서드를 정의하고, 이를 대리자에 등록하여 콜백을 전달하고 있습니다.
