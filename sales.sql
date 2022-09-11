SELECT TOP 1OO * FROM sales_reps
WHERE DATEDIFF(day, past_date, GETDATE()) < 30
GROUP BY volume_of_sales;
