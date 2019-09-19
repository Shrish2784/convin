import React from "react";
import {Line} from "react-chartjs-2";

class UserHome extends React.Component {
    render() {
        return (
            <div id="chart">
                <Line
                    data={{
                        labels: ['Caller1', 'Caller2', 'Caller3', 'Caller4', 'Caller5', 'Caller6'],
                        datasets: [{
                            data: [12, 19, 3, 5, 2, 3],
                            borderColor: [
                                'rgb(99,255,162)',
                            ],
                            borderWidth: 6,
                            fill: false
                        }],
                    }}
                    options={{
                        title: {
                            display: true,
                            text: "Call Hours With Callers",
                            position: "top",
                            fontSize: 24
                        },
                        legend: {
                            display: false
                        }
                    }}
                />
            </div>

        );
    }
}

export default UserHome;