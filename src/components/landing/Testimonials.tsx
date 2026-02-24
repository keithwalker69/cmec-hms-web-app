"use client";

import { Card, Avatar, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";

// TODO: [Duy] - Implement testimonials carousel or grid -> DONE

export default function Testimonials() {
  // 1. Define real data here
  const testimonials = [
    {
      name: "Nguyễn Văn A",
      role: "Bệnh nhân",
      content: "Dịch vụ tuyệt vời, bác sĩ tận tâm. Tôi rất hài lòng với trải nghiệm tại đây.",
    },
    {
      name: "Trần Thị B",
      role: "Người nhà bệnh nhân",
      content: "Hệ thống đặt lịch rất tiện lợi, không phải chờ đợi lâu khi đến khám.",
    },
    {
      name: "Lê Hoàng C",
      role: "Đối tác",
      content: "Cơ sở vật chất hiện đại, quy trình làm việc chuyên nghiệp.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Added animation (data-aos) to the title f */}
        <h2 
          className="text-3xl font-bold text-center mb-12 text-gray-800"
          data-aos="fade-up"
        >
          Khách hàng nói gì về chúng tôi
        </h2>
        
        <Row gutter={[24, 24]} justify="center">
          {testimonials.map((item, index) => (
            <Col xs={24} md={8} key={index}>
              {/* Added animation (data-aos) to the cards */}
              <Card 
                hoverable 
                className="h-full shadow-sm"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-4">
                  <Avatar icon={<UserOutlined />} size="large" className="bg-blue-500" />
                  <div className="ml-4">
                    <h4 className="font-bold text-lg m-0">{item.name}</h4>
                    <span className="text-gray-500 text-sm">{item.role}</span>
                  </div>
                </div>
                <p className="italic text-gray-600">
                  "{item.content}"
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}