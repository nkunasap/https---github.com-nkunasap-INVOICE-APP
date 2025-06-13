import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const InvoiceSite = () => {
  const [invoices, setInvoices] = useState([]);
  const [customer, setCustomer] = useState("");
  const [amount, setAmount] = useState("");

  const generateInvoice = () => {
    if (!customer || !amount) return;

    const newInvoice = {
      id: Date.now(),
      customer,
      amount,
      date: new Date().toLocaleDateString(),
    };

    setInvoices([newInvoice, ...invoices]);
    setCustomer("");
    setAmount("");
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Invoice Generator</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Input
          placeholder="Customer Name"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
        />
        <Input
          placeholder="Amount (R)"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button className="col-span-1 md:col-span-2" onClick={generateInvoice}>
          Release Invoice
        </Button>
      </div>

      <div className="space-y-4">
        {invoices.map((invoice) => (
          <Card key={invoice.id}>
            <CardContent className="p-4">
              <p><strong>Customer:</strong> {invoice.customer}</p>
              <p><strong>Amount:</strong> R{invoice.amount}</p>
              <p><strong>Date:</strong> {invoice.date}</p>
              <p><strong>Invoice ID:</strong> {invoice.id}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InvoiceSite;
