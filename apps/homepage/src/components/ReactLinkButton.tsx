import React from 'react';

interface Props {
  href?: string;
  icon?: 'play' | 'play-fill' | 'mail' | 'linkedin' | 'code-bracket' | 'git' | 'github';
  children?: React.ReactNode;
}

export const ReactLinkButton = ({ href, icon, children }: Props) => (
  <a
    data-drawer-hide="drawer-right-example"
    href={href}
    referrerPolicy="no-referrer"
    target="_blank"
    className="flex flex-row items-center max-w-fit gap-2 font-bold px-3 py-2 border border-black rounded hover:bg-gray-200"
  >
    {icon ? <img width={24} src={`/${icon}.svg`} /> : null}
    {children}
  </a>
);
