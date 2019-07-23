import { createStackNavigator} from 'react-navigation';

import Main from './pages/Main';
import Listar from './pages/Listar';
import Cadastrar from './pages/Cadastrar';


export default createStackNavigator({
    Main,
    Listar,
    Cadastrar
},{
    navigationOptions:{
        headerStyle:{
            backgroundColor: "#da552f"
        },
        headerTintColor:"#fff"
    }
});