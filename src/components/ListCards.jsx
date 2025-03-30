export default function ListCards() {
    return (
          <div class="max-w-md bg-white border border-gray-200 rounded-lg shadow-sm">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="https://media.istockphoto.com/id/1500533044/photo/grilled-sea-bass-fillet-with-lime-and-thyme-black-background-top-view.jpg?s=2048x2048&w=is&k=20&c=jKusXSPSWPRQ06gGaldYLkLalDdOAY2aOJ10_Gk_UCA="
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center justify-center py-3 w-full text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
    )
}