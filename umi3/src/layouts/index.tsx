import { IRouteComponentProps } from 'umi'
import { MenuBar } from '@/components';
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

