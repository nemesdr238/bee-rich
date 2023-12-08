import { Link as Remixlink, Outlet } from '@remix-run/react';

import { Container } from '~/components/containers';
import { NavLink } from '~/components/links';

export default function Component() {
  return (
    <>
      <header>
        <Container className="p-4 mb-10">
          <nav>
            <ul className="w-full flex flex-row gap-5 font-bold text-lg lg:text-2*1">
              <li>
                <Remixlink to="/">Bee Rich</Remixlink>
              </li>
              <li className="ml-auto">
                <Remixlink to="/404">Log out</Remixlink>
              </li>
            </ul>
            <ul className="mt-10 w-full flex flex-row gap-5">
              <li className="ml-auto">
                <NavLink to="/dashboard/incomes">Incomes</NavLink>
              </li>
              <li className="mr-auto">
                <NavLink to="/dashboard/expenses">Expenses</NavLink>
              </li>
            </ul>
          </nav>
        </Container>
      </header>
      <main className="p-4 w-full flex justify-center items-center">
        <Outlet />
      </main>
    </>
  );
}
