const PaymentTable = ({ payments }) => {
    return (
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="text-left bg-gray-100">
              <th className="px-4 py-3 text-gray-700">User</th>
              <th className="px-4 py-3 text-gray-700">Amount</th>
              <th className="px-4 py-3 text-gray-700">Date</th>
              <th className="px-4 py-3 text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b border-gray-200">{payment.user}</td>
                <td className="px-4 py-2 border-b border-gray-200">${payment.amount}</td>
                <td className="px-4 py-2 border-b border-gray-200">{payment.date}</td>
                <td
                  className={`px-4 py-2 border-b border-gray-200 ${
                    payment.status === "Paid" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {payment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default PaymentTable;
  