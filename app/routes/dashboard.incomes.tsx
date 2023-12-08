import { Outlet, useNavigation } from '@remix-run/react';
import { clsx } from 'clsx';

import { H1 } from '~/components/headings';
import { ListLinkItem } from '~/components/links';

export default function Component() {
  const navigation = useNavigation();
  return (
    <div className="w-full">
      <H1>Your incomes</H1>
      <div className="mt-10 w-full flex flex-col-reverse lg:flex-row">
        <section className="lg:p-8 w-full lg:max-w-2*1">
          <h2 className="sr-only">All expenses</h2>
          <ul className="flex flex-col">
            <li>
              <ListLinkItem to="/dashboard/incomes/1">
                <p className="text-xl font-semibold">Food</p>
                <p>$100</p>
              </ListLinkItem>

              <li>
                <ListLinkItem to="/dashboard/incomes/2">
                  <p className="text-xl font-semibold">Transport</p>
                  <p>$100</p>
                </ListLinkItem>

                <li>
                  <ListLinkItem to="/dashboard/incomes/3">
                    <p className="text-xl font-semibold">Entertainment</p>
                    <p>$100</p>
                  </ListLinkItem>
                </li>
              </li>
            </li>
          </ul>
        </section>
        <section className={clsx('lg:p-8 ', navigation.state === 'loading' && 'motion-safe:animate-pulse')}>
          <Outlet />
        </section>
      </div>
    </div>
  );
}
