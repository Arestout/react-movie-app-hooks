import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
