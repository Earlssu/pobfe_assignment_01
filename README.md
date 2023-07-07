# React와 History API 사용하여 SPA Router 기능 구현하기 (pobfe 1주차 과제)

## 💻 기본 설정

Package Manager : [NPM](https://www.npmjs.com/)

Build Tool : [Vite](https://vitejs.dev/)


## 🎯 과제 목표 
1. 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.
    * `/` → `root` 페이지
    * `/about` → `about` 페이지
2. 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.
    * 힌트) `window.onpopstate`, `window.location.pathname` History API(`pushState`)
3. Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.
```typescript
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
```
4. 최소한의 push 기능을 가진 useRouter Hook을 작성한다.
```typescript
const { push } = useRouter();
```
5. 아래 스크린샷을 참고하여 앱을 작성한다.
  * **Root 경로**

  ![image](https://github.com/Earlssu/pobfe_assignment_01/assets/61323917/0dd63f6e-9a89-472a-a7fe-1dc6fe362a89)
  * **About 경로**

   ![image](https://github.com/Earlssu/pobfe_assignment_01/assets/61323917/86dcb818-b751-4645-bcaa-45a42ec92c8e)


## 🔖 과제 설명
<div align="center">
  
  ![화면 기록 2023-07-07 오후 5 18 10](https://github.com/Earlssu/pobfe_assignment_01/assets/61323917/72708bb7-0122-47c7-b61b-959dd72b75e5)  
</div>





### useRouter hook 구현 

```typescript
export default function useRouter() {
  const push = (path: string) => {
    history.pushState(null, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return { push };
}
```

### Route 컴포넌트 구현

```typescript
export interface RouteProps {
  path: string;
  component: React.ReactNode;
}

export default function Route({ path, component }: RouteProps) {
  return window.location.pathname == path ? <div>{component}</div> : null;
}
```

### Router 컴포넌트 구현

```typescript
import React, { useEffect, useState } from "react";
import { RouteProps } from "react-router-dom";

interface RouterProps {
  children: React.ReactNode;
}

export default function Router({ children }: RouterProps) {
  const [path, setPath] = useState(location.pathname);
  const routes = React.Children.toArray(
    children
  ) as React.ReactElement<RouteProps>[];

  useEffect(() => {
    const handleSetPath = () => {
      setPath(location.pathname);
    };

    window.addEventListener("popstate", handleSetPath);

    return () => {
      window.removeEventListener("popstate", handleSetPath);
    };
  }, []);

  return routes.find((route) => route.props.path === path);
}

```
