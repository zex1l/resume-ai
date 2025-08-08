import { Link, useNavigate } from 'react-router-dom';
import { HeaderLayout } from './header-layout';
import { HeaderNav } from './header-nav';
import { navData } from './nav.data';
import { Button } from '@/shared/ui/button';
import { Authenticated, Unauthenticated } from 'convex/react';
import { Menu } from 'lucide-react';
import { useAuthActions } from '@convex-dev/auth/react';
import { ROUTES } from '@/shared/constans/routes';

export const Header = () => {
  const { signOut } = useAuthActions();
  const navigate = useNavigate();
  return (
    <HeaderLayout
      logo={<h1 className="text-2xl font-bold">Logo</h1>}
      nav={
        <HeaderNav
          items={
            <>
              {navData.map((item, key) => (
                <li key={key}>
                  <Link to={item.href}>{item.title}</Link>
                </li>
              ))}
            </>
          }
        />
      }
      actions={
        <div className="flex items-center gap-2">
          <Authenticated>
            <Button onClick={() => signOut()}>Profile</Button>
          </Authenticated>
          <Unauthenticated>
            <Button onClick={() => navigate(ROUTES.AUTH)}>
              Getting Started
            </Button>
          </Unauthenticated>

          <Button className="lg:hidden" onClick={() => {}}>
            <Menu />
          </Button>
        </div>
      }
    />
  );
};
