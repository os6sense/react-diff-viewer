import { configure } from 'enzyme'
//import * as Adapter from 'enzyme-adapter-react-17'
import * as Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() })
