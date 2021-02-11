import PropTypes from 'prop-types';

function TacoComponent({ taco, author }) {
    return(
        <>
            <p> 
                {`
                    ${taco.base_layer.name} with 
                    ${taco.mixin.name} garnished with
                    ${taco.condiment.name} topped of with
                    ${taco.seasoning.name} and wrapped
                    in delicious ${taco.shell.name} -
                    ${author}
                `} 
            </p>
            <span></span>
        </>
    )
}
//Validaciones...
// Si no está definido author, le asigna 'Stranger
TacoComponent.defaultProps = {
    author: 'Stranger'
}
// Valida la existencia/definición de datos props
TacoComponent.propTypes = {
    taco: PropTypes.object.isRequired,
    author: PropTypes.string.isRequired
}

export default TacoComponent;