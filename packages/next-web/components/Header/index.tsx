/****************************
 * laf website header nav
 ***************************/

import React from "react";

export default function Header(props: { size: "sm" | "lg" }) {
  const { size } = props;
  return size === "sm" ? (
    <div>small</div>
  ) : (
    <div className="flex justify-between p-4 bg-white	drop-shadow">
      <div className="flex items-center">
        <img src="/logo.png" alt="logo" className="mr-2 rounded-full" width={30} />
        <span>Laf 云开发</span>
        <span className="ml-4 mr-4"> / </span>
        <span>LeezQ</span>
      </div>

      <div>
        <img
          src="https://avatars.githubusercontent.com/u/972813?s=40&v=4"
          className="rounded-full"
          width={30}
          alt="avatar"
        />
      </div>
    </div>
  );
}