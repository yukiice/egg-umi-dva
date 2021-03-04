import Search from './search';
import Lists from './lists';
import { connect } from 'dva';
function Dvas(props) {
  return (
    <div>
      <Search {...props}></Search>
      <Lists {...props}></Lists>
    </div>
  );
}

export default connect(({ search }) => ({
  search,
}))(Dvas);
