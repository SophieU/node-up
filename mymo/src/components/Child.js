import React,{Component} from 'react'
import {observer} from 'mobx-react'

@observer
class Upload extends Component{
    render() {
        const { vm } = this.props;
        return (
            <div>
              <h1>This is mobx-react!</h1>
              <p>
                First name:{" "}
                <textarea
                  type="text"
                  value={vm.firstName}
                  onChange={e => vm.setValue("firstName", e)}
                />
              </p>
              <p>
                Last name:{" "}
                <textarea
                  type="text"
                  value={vm.lastName}
                  onChange={e => vm.setValue("lastName", e)}
                />
              </p>
              <p>Full name: {vm.fullName}</p>
              <p>
                <button onClick={vm.doReset}>Reset</button>
              </p>
            </div>
        )

    }
}