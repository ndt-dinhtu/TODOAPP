import React, { act } from "react";

const Footer = ({ completedTaskCount = 0, activeTaskCount = 0 }) => {
  return (
    <div>
      {completedTaskCount + activeTaskCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTaskCount > 0 && (
              <>
                Tuyệt vời, bạn đã hoành thành {completedTaskCount} việc
                {activeTaskCount > 0 &&
                  `, còn ${activeTaskCount} việc nữa thôi, cố lên!!`}
              </>
            )}

            {completedTaskCount === 0 && activeTaskCount > 0 && (
              <>Hãy bắt đầu làm {activeTaskCount} việc đi nào!!</>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default Footer;
