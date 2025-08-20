<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ARTraders - Rice Shop Management System</title>
    <style>
        :root {
            --primary: #2c3e50;
            --secondary: #3498db;
            --accent: #e74c3c;
            --light: #ecf0f1;
            --dark: #2c3e50;
            --success: #2ecc71;
            --warning: #f39c12;
            --danger: #e74c3c;
            --gray: #95a5a6;
            --white: #ffffff;
            --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            --transition: all 0.3s ease;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: #f5f7fa;
            color: var(--dark);
            line-height: 1.6;
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            text-align: center;
            padding: 2rem 0;
            border-bottom: 2px solid var(--secondary);
            margin-bottom: 2rem;
        }

        .logo {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            margin-bottom: 1rem;
        }

        .logo-icon {
            font-size: 2.5rem;
            color: var(--success);
        }

        h1 {
            color: var(--primary);
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        h2 {
            color: var(--secondary);
            margin: 1.5rem 0 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid var(--light);
        }

        h3 {
            color: var(--primary);
            margin: 1.2rem 0 0.8rem;
        }

        p {
            margin-bottom: 1rem;
        }

        .overview {
            background: linear-gradient(135deg, var(--light) 0%, var(--white) 100%);
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: var(--shadow);
            margin-bottom: 2rem;
        }

        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
        }

        .feature-card {
            background-color: var(--white);
            border-radius: 8px;
            padding: 1.5rem;
            box-shadow: var(--shadow);
            transition: var(--transition);
            border-left: 4px solid var(--secondary);
        }

        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .feature-icon {
            font-size: 2rem;
            color: var(--secondary);
            margin-bottom: 1rem;
        }

        .feature-title {
            font-size: 1.3rem;
            color: var(--primary);
            margin-bottom: 0.8rem;
        }

        .feature-list {
            list-style-type: none;
        }

        .feature-list li {
            margin-bottom: 0.5rem;
            padding-left: 1.5rem;
            position: relative;
        }

        .feature-list li:before {
            content: "•";
            color: var(--success);
            font-weight: bold;
            position: absolute;
            left: 0;
        }

        .footer {
            text-align: center;
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 1px solid var(--light);
            color: var(--gray);
        }

        @media (max-width: 768px) {
            .feature-grid {
                grid-template-columns: 1fr;
            }
            
            body {
                padding: 15px;
            }
            
            h1 {
                font-size: 2rem;
            }
        }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="header">
        <div class="logo">
            <i class="fas fa-store logo-icon"></i>
            <h1>ARTraders Management System</h1>
        </div>
        <p>A specialized rice shop management solution</p>
    </div>

    <div class="overview">
        <h2>Project Overview</h2>
        <p>ARTraders is a dedicated management system built for my own retail business, a specialized rice shop. This application is designed to digitize and streamline my daily operations, replacing manual record-keeping with an efficient, reliable, and accurate system to manage customer accounts, inventory, and sales on a regular basis.</p>
    </div>

    <h2>System Features</h2>
    
    <div class="feature-grid">
        <div class="feature-card">
            <i class="fas fa-users feature-icon"></i>
            <h3 class="feature-title">1. Customer Portal (Login & Registration)</h3>
            <ul class="feature-list">
                <li>New Customer Onboarding: A simple form to register new clients into your system before their first credit purchase.</li>
                <li>Secure Account Access: Registered customers can log in to view their personal purchase history and current account status.</li>
            </ul>
        </div>
        
        <div class="feature-card">
            <i class="fas fa-shopping-cart feature-icon"></i>
            <h3 class="feature-title">2. Sales & Transaction Processing</h3>
            <ul class="feature-list">
                <li>Product Selection: Intuitive interface to quickly add products to a customer's invoice.</li>
                <li>Dynamic Cart Management: Easily adjust quantities or remove items during the sale process.</li>
                <li>Instant Checkout: Finalize transactions and automatically update the customer's account balance.</li>
            </ul>
        </div>
        
        <div class="feature-card">
            <i class="fas fa-credit-card feature-icon"></i>
            <h3 class="feature-title">3. Credit & Payment Tracking</h3>
            <ul class="feature-list">
                <li>Dues Management: The system continuously tracks each customer's outstanding credit (dues).</li>
                <li>Payment Processing: A dedicated module to record partial or full payments, immediately updating the customer's balance and transaction history.</li>
                <li>Complete Financial History: Maintain a permanent, transparent log of all transactions for any customer, including dates, items purchased, and payments made.</li>
            </ul>
        </div>
        
        <div class="feature-card">
            <i class="fas fa-user-cog feature-icon"></i>
            <h3 class="feature-title">4. Customer Account Management</h3>
            <ul class="feature-list">
                <li>Dues & Credit Tracking: The system automatically tracks every customer's outstanding balance (dues).</li>
                <li>Payment Recording: A dedicated feature to accurately record customer payments and reduce their outstanding balance.</li>
                <li>Complete Transaction History: Access a full, dated log of all sales and payments for any customer, providing clarity for you and your clients.</li>
            </ul>
        </div>
        
        <div class="feature-card">
            <i class="fas fa-chart-line feature-icon"></i>
            <h3 class="feature-title">5. AR Traders Owner Dashboard (Admin)</h3>
            <ul class="feature-list">
                <li>Revenue & Performance Overview: View key metrics at a glance, including total revenue, daily sales, and collected payments.</li>
                <li>Customer Insights: Monitor all customer accounts, identify top clients, and manage credit relationships effectively.</li>
                <li>Sales Analytics: Generate insights on product performance to inform stocking and business strategy.</li>
            </ul>
        </div>
    </div>

    <div class="footer">
        <p>ARTraders Management System | Designed for specialized rice shop operations</p>
    </div>
</body>
</html>
