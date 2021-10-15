import {observable} from 'mobx';

const CounterStore = () => {

    // observable로 지정
        @observable
        let _count = 5;
    }

export default CounterStore;