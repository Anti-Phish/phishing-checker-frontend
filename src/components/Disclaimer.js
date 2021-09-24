import React from 'react';

function Disclaimer () {

    let height = window.innerHeight
    return (
        <div className="bodyContent" style={{height:`${height > 600 ? height*0.79 : 550}px`}}>
            <div className="AboutDes" >
                <div className="blog-card__title"><b>Disclaimer</b></div>
                <div style={{ marginLeft:"15%",marginRight:"15%", fontSize:`${height > 900 ? 30 : 12}px`, marginTop:"5%"}}>
                        Use of this Site is at your own risk.
                        Mr. Detective team shall not be held liable for any damage you may cause to yourself or to third parties in using the service, especially by visiting the websites of submitted URLs that may generate collateral damage.
                        mrdetective.live makes no representations or warranties of any kind, express or implied, as to the site's operation or the information, content, or materials included on this site. <br /> <br />
                        To the full extent permissible by applicable law, mrdetective.live hereby disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability and fitness for any particular purpose. Mr. Detective team shall not guarantee the availability of the service or that it will be error-free or bug-free. Mr. Detective team shall in no way guarantee the performance of the service's response time and the search results that you obtain.
                </div>
            </div>
        </div>
    )
}

export default Disclaimer;
