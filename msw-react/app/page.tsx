'use client';

import { useEffect } from "react";

export default function Home() {

    useEffect(() => {
        fetch('/api/hello').then(res => res.json()).then((res) => {
            console.log('hello res', res)
        })
    }, [])

  return (
      <div>

      </div>
  );
}
