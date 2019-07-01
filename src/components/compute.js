import React from 'react'
import Slider from '@material-ui/lab/Slider';

class Compute extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            MortageValue: 0,
            BillValue: 0,
            GeneralValue: 0,
            MortageValueMax: 100,
            BillValueMax: 100,
            GeneralValueMax: 100,
            SavingValue: 0,
            data: {
                'incomes': {
                    'amount': 45300,
                    'from_age': 30,
                    'to_age': 67,
                    'frequency': 'annual',
                    'name': 'Annual salary'
                },
                'expenditures': [{
                    'amount': 1199,
                    'from_age': 30,
                    'to_age': 65,
                    'frequency': 'monthly',
                    'name': 'Mortgage'
                },
                    {
                        'amount': 1199,
                        'from_age': 30,
                        'to_age': 65,
                        'frequency': 'monthly',
                        'name': 'Bills'
                    },
                    {
                        'amount': 1199,
                        'from_age': 30,
                        'to_age': 65,
                        'frequency': 'monthly',
                        'name': 'General spending'
                    }]
            }
        }

        // console.log(this.state.data.expenditures[0].amount)
        setTimeout(() => {
            this.setState({
                MortageValue: this.state.data.expenditures[0].amount,
                BillValue: this.state.data.expenditures[1].amount,
                GeneralValue: this.state.data.expenditures[2].amount,
                MortageValueMax: this.state.data.expenditures[0].amount,
                BillValueMax: this.state.data.expenditures[1].amount,
                GeneralValueMax: this.state.data.expenditures[2].amount
            })
            // console.log(this.state.MortageValueMax)
        }, 100)
    }
    onHanchHandler = (e,v,n) => {
        // console.log(n);
        this.setState({
            [n] : v,
        })
        this.setState(state => {
            return {
                SavingValue: this.state.data.expenditures[0].amount - state.MortageValue + this.state.data.expenditures[1].amount - state.BillValue + this.state.data.expenditures[2].amount - state.GeneralValue
            }
        })
    }

    render () {
        return (
            <div>
                <div className='left'>
                    <div className='div-header'>
                        Your INCOME & SPEND
                    </div>
                    <div className='div-content'>
                        <div className='sub-header'>
                            Annual income
                        </div>
                        <div className='input-content'>
                            <form>
                                <div className='input-items'>
                                    <div className='input-item'>
                                        <span>Annual salary:</span>
                                        <input type='number' value={this.state.data.incomes.amount} name='annualSalary' />
                                    </div>
                                    <div className='input-item'>
                                        <span>From age:</span>
                                        <input type='number' value={this.state.data.incomes.from_age} name='annualFromAge' />
                                    </div>
                                    <div className='input-item'>
                                        <span>To age:</span>
                                        <input type='number' name='annualToAge' value={this.state.data.incomes.to_age} />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <br />
                        <div className='sub-header'>
                            Monthly spending
                        </div>
                        <div className='input-content'>

                            <div className='input-items'>
                                <div className='input-item'>
                                    <span>Mortgage</span>
                                    <input type='number' value={this.state.data.expenditures[0].amount} name='MortageValueInput' />
                                </div>
                                <div className='input-item'>
                                    <span>From age:</span>
                                    <input type='number' name='mortgageFromAge' value={this.state.data.expenditures[0].from_age} />
                                </div>
                                <div className='input-item'>
                                    <span>To age:</span>
                                    <input type='number' name='mortgageToAge' value={this.state.data.expenditures[0].to_age} />
                                </div>
                            </div>
                            <div className='input-items'>
                                <div className='input-item'>
                                    <span>Bills</span>
                                    <input type='number' value={this.state.data.expenditures[1].amount} name='billSpending' />
                                </div>
                                <div className='input-item'>
                                    <span>From age:</span>
                                    <input type='number' name='billFromAge' value={this.state.data.expenditures[1].from_age} />
                                </div>
                                <div className='input-item'>
                                    <span>To age:</span>
                                    <input type='number' value={this.state.data.expenditures[1].to_age} name='billToAge' />
                                </div>
                            </div>
                            <div className='input-items'>
                                <div className='input-item'>
                                    <span>General Spending</span>
                                    <input type='number' name='generalSpending' value={this.state.data.expenditures[2].amount} />
                                </div>
                                <div className='input-item'>
                                    <span>From age:</span>
                                    <input type='number' name='generalFromAge' value={this.state.data.expenditures[2].from_age} />
                                </div>
                                <div className='input-item'>
                                    <span>To age:</span>
                                    <input type='number' name='generalToAge' value={this.state.data.expenditures[2].to_age} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='div-header'>
                        SPEND LESS
                    </div>
                    <div className='div-content'>
                        <p>Try reducing your monthly spending to see how your forecast could improve</p>
                        <div>
                            <span style={{float: 'left'}}>Mortgage</span>
                            <Slider
                                min={1}
                                max={this.state.BillValueMax}
                                onChange={ (e,v) => this.onHanchHandler(e,v,'MortageValue')}
                                value={this.state.MortageValue}
                                aria-labelledby="discrete-slider-always"
                                valueLabelDisplay="on"
                                style={{width: 'calc(100% - 95px)',float: 'right',marginLeft: '20px'}}
                            />
                            <br clear={'all'}/>
                        </div> <br/><br/>
                        <div>
                            <span style={{float: 'left'}}>Bills</span>
                            <Slider
                                min={1}
                                max={this.state.BillValueMax}
                                onChange={ (e,v) => this.onHanchHandler(e,v,'BillValue')}
                                value={this.state.BillValue}
                                aria-labelledby="discrete-slider-always"
                                valueLabelDisplay="on"
                                style={{width: 'calc(100% - 95px)',float: 'right',marginLeft: '20px'}}
                            />
                            <br clear={'all'}/>
                        </div> <br/><br/>

                        <div>
                            <span style={{float: 'left'}}>General <br/> Spending</span>
                            <Slider
                                min={1}
                                max={this.state.BillValueMax}
                                onChange={ (e,v) => this.onHanchHandler(e,v,'GeneralValue')}
                                value={this.state.GeneralValue}
                                aria-labelledby="discrete-slider-always"
                                valueLabelDisplay="on"
                                style={{width: 'calc(100% - 95px)',float: 'right',marginLeft: '20px'}}
                            />
                            <br clear={'all'}/>
                        </div>

                        <p>This means you're saving <span id='saving'>$ {this.state.SavingValue}</span> per month</p>
                        <div className='button-content'>
                            <button>
                                <a href='https://www.google.com' target='_blank'>Find ways to save</a>
                            </button>
                        </div>
                        <div id='helpful-div' style={{ display: this.state.HelpDiv }}>
                            <i className='far fa-thumbs-down' onClick={() => this.HideHelpFull()} />
                            <i className='far fa-thumbs-up' onClick={() => this.HideHelpFull()} />
                            <span>was this helpful?</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Compute
