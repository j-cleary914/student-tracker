import React, { Component } from 'react';
import Axios from 'axios';
import BlockCard from './BlockCard'

class BlockList extends Component {

    state = {
        blocks: []
    }

    componentDidMount() {
        Axios.get('https://nc-student-tracker.herokuapp.com/api/blocks')
        .then(({data: {blocks}}) => {
            this.setState({blocks})
        });
    }

    render() {
        const {blocks} = this.state;
        const {students} = this.props;
        const blockCount = students.reduce((obj, curr) => {
            obj[curr.currentBlock] = (obj[curr.currentBlock] || 0) + 1;
            return obj;
        }, {});
        return (
            <ul>
                {
                    blocks.map(block => {
                        return <BlockCard key={block.slug} block={block} count={blockCount[block.slug]}/>
                    })
                }
            </ul>
        );
    }
}

export default BlockList;