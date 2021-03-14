import { IRouteComponentProps } from 'umi'
import { MenuBar } from '@/components';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
interface StringArray {
  [index: number]: string;
}
export default function Layout({ children, location, route, history, match }: IRouteComponentProps) {
  const paths: StringArray[] = ['/', '/order', '/user'];
  return (
    <div>
      <MenuBar
        show={paths.includes(location.pathname)}
        pathname={location.pathname}
      ></MenuBar>
       <div>
       {children}
       </div>
    </div>
  )
}

