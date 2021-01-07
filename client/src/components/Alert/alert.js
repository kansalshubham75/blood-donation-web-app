import { connect } from 'react-redux'

const Alert = ({ errors }) => {
    return (
        <div>
            {errors.map(error => {
                return (<div key={error.id} className={`alert-${error.type}`}>
                    {error.msg}
                </div>)
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        errors: state.alert.err
    }
}

export default connect(mapStateToProps)(Alert)