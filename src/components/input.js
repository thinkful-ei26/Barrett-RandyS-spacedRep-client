import React from 'react';

export default class Input extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }

    render() {
        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <article className="form-error">{this.props.meta.error}</article>;
        }

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <article className="form-warning">{this.props.meta.warning}</article>
            );
        }

        return (
            <section className="form-input">
                <label htmlFor={this.props.input.name}>
                    {this.props.label}
                    {error}
                    {warning}
                </label>
                <input
                    {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    ref={input => (this.input = input)}
                />
            </section>
        );
    }
}
