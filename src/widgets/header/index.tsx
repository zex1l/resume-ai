import { Link } from 'react-router-dom';
import { HeaderActions } from './header-actions';
import { HeaderLayout } from './header-layout';
import { HeaderNav } from './header-nav';
import { navData } from './nav.data';

export const Header = () => {
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
      actions={<HeaderActions />}
    />
  );
};
