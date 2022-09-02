import { Component } from 'react'

class CustomFooter extends Component {
    render(){
        return(
            <div>
                <div className='CustomFooter'>
                <ul className='ul'>
                    <li className='li'>Audio and Subtitles</li>
                    <li className='li'>Media Center</li>
                    <li className='li'>Privacy</li>
                    <li className='li'>Contact us</li>
                </ul>
                <ul className='ul'>
                    <li className='li'>Audio Description</li>
                    <li className='li'>Investors Relations</li>
                    <li className='li'>Legal Notices</li>
                </ul>
                <ul className='ul'>
                    <li className='li'>Help Center</li>
                    <li className='li'>Jobs</li>
                    <li className='li'>Cookie Preferences</li>
                </ul>
                <ul className='ul'>
                    <li className='li'>Gift Cards</li>
                    <li className='li'>Terms of Use</li>
                    <li className='li'>Information</li>
                </ul>
                </div>
                <div className='footdiv'>
                    <button className='btnfooter'>Service Code</button>
                    <span> &copy; 1997-2022 Netflix, Inc. </span>
                </div>
            </div>
        )
    }
}

export default CustomFooter