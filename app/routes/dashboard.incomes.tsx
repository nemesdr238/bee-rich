import { H1 } from '~/components/headings';

export default function Component() {
  return (
    <div className="w-full">
      <H1>Your incomes</H1>
      <div className="mt-10 w-full flex flex-col-reverse lg:flex-row">
        <section className="lg:p-8 w-full lg:max-w-2*1">
          <h2 className="sr-only">All expenses</h2>
          <ul className="flex flex-col">
            <li>
              <p className="text-xl font-semibold">Food</p>
              <p>$100</p>
              <li>
                <p className="text-xl font-semibold">Transport</p>
                <p>$100</p>
                <li>
                  <p className="text-xl font-semibold">Entertainment</p>
                  <p>$100</p>
                </li>
              </li>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
