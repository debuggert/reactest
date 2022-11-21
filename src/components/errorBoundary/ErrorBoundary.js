import { Component } from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';


// предохранитель, служит для того чтобы отлавливать ошибки и отрисовывать ошибку вместо сломанного компонента, а весь остальной сайт работал
// ловят не все ошибки (например: ошибки внутри обработчика событий(тк вне рендера обрабатывается), асинхронный код и в самом предохранителе, а так же серверный рендерирнг)
// отлавливает ошибки в render, constructor и методом жизненного цикла дочерних компонентов
class ErrorBoundary extends Component {
    state = {
        error: false
    }

    // static getDerivedStateFromError(error){ // обновляет состояния и все
    //     return {error: true};
    // }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({
            error: true
        })
    }

    render() {
        if(this.state.error) {
            return <ErrorMessage/>
        }
        
        return this.props.children;
    }
}

export default ErrorBoundary;