import React from 'react'
import './Performance.css';
import SalesReport from "./Assets/yearlysalesreport.jpg";
import UserSatisfaction from "./Assets/usersatisfaction.jpg";

const Performance = () => {
  return (
    <div className="analysis-section">
        <h2>Performance Analysis</h2>
        <div className="performance-item">
            <img
            src={SalesReport}
            alt="Yearly Sales Report"
            className="sales-report-image"
            />
            <p>
            In terms of the quality and sales of our products, Ichiban Furniture is always working to improve. 
            The bar graph above clearly shows Ichiban Furniture's consistent expansion as a business over the years since 
            its founding. We are driven to increase sales by making sure our products are reasonably priced and to 
            emerge as one of the market's most formidable mattress suppliers. 
            </p>
        </div>

        <div className="performance-item">
            <img
            src={UserSatisfaction}
            alt="User Satisfaction"
            className="user-satisfaction-image"
            />
            <p>
            Ichiban Furniture places a high priority on our clients' degree of satisfaction with the items we supply. 
            In order to maintain the quality of our products, our organization regularly conducts customer 
            satisfaction surveys to gather input from customers. The pie chart above illustrates how well-liked 
            our  StyleSync wardrobe, our all-time best seller, is by 50% of the community, while our 
            British Style wardrobe, our second most popular product, is by 31% of the community.  
            Of the community, 11% and 8%, respectively, like the FashionFolio wardrobe and the Teak Wood wardrobe.
            When making a purchase, this pie chart can also serve as a buyer's guide.
            </p>
        </div>
    </div>
  )
}

export default Performance
