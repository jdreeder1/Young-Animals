import React from 'react';
import Header from './Header';

class Tour extends React.Component {
    render(){
        return (
            <>
            <Header />
            <table>
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>Venue</td>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>9.10.21</td><td>Blue Note - Columbia, MO</td></tr>
                    <tr><td>9.15.21</td><td>Rose Music Hall - Columbia, MO</td></tr>
                    <tr><td>9.21.21</td><td>The Deuce - Columbia, MO</td></tr>
                    <tr><td>9.28.21</td><td>Roxy's - Columbia, MO</td></tr>
                    <tr><td>10.01.21</td><td>The Pagaent - St. Louis, MO</td></tr>
                    <tr><td>10.03.21</td><td>Chaifetz Arena - St. Louis, MO</td></tr>
                    <tr><td>10.06.21</td><td>Enterprise Center - St. Louis, MO</td></tr>
                    <tr><td>10.13.21</td><td>Sprint Center - Kansas City, MO</td></tr>
                    <tr><td>10.14.21</td><td>T-Mobile Arena - Kansas City, MO</td></tr>
                    <tr><td>10.21.21</td><td>Hy-Vee Arena - Kansas City, MO</td></tr>

                </tbody>
            </table>
            </>
        );
    }
}

export default Tour;