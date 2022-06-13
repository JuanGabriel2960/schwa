import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    to: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent;
    text: string;
}

const LandingModule = lazy(() => import(/* webpackChunkName: "landing_module"*/ '../landing/LandingModule'))

export const routes: Route[] = [
    {
        path: '/*',
        to: '/',
        component: LandingModule,
        text: 'LandingModule'
    },
]