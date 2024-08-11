import React, { ReactNode } from 'react';
import './PageLayout.css';

type PageLayoutProps = {
    children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps): JSX.Element {
    return (
        <React.StrictMode>
            <Navigation>
                <a href="/">Home</a>
                <a href="/about">About</a>
            </Navigation>
            <Content>{children}</Content>
        </React.StrictMode>
    );
}

type NavigationProps = {
    children: ReactNode;
};

function Navigation({ children }: NavigationProps): JSX.Element {
    return (
        <div
            style={{
                paddingBottom: 25,
                paddingTop: 5,
                fontSize: '1.2em',
                display: 'flex',
                justifyContent: 'center',
                gap: 25,
            }}
        >
            {children}
        </div>
    );
}

type ContentProps = {
    children: ReactNode;
};

function Content({ children }: ContentProps): JSX.Element {
    return <div>{children}</div>;
}
