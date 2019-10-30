import React from 'react';

interface SampleComponentProps {
    data: any
}
interface SampleComponentState {

}
export default class SampleComponent extends React.Component<SampleComponentProps, SampleComponentState>{
    constructor(props: SampleComponentProps) {
        super(props);
    }

    render(){
        return(
            <div>Sample Component</div>
        )
    }
}

