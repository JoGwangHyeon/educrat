import React from "react";
import Link from "next/link";
export default function Join() {
  return (
    <section className="layout-pt-md layout-pb-md bg-purple-1">
      <div className="container">
        <div className="row y-gap-20 justify-between items-center">
          <div className="col-xl-4 col-lg-5">
            <h2 className="text-30 lh-15 text-white">
            ETF는 펀드와 주식의 장점이 결합된 혁신적인 <span className="text-green-1">(INNOVATIVE) </span> 금융상품입니다.
            </h2>
          </div>

          <div className="col-auto">
            <Link href="#" className="button -md -green-1 text-dark-1">
              TIFER ETF 바로가기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
