import React, { useEffect } from 'react';
import { pdfAtom } from '@/atoms/pdfAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getProjPDF } from '@/utils/pdfAPI';
import { authAtom } from '@/atoms/authAtom';
import { userAtom } from '@/atoms/userAtom';
import { getUserInfo } from '@/utils/userInfoAPI';
import { User } from '@/models/User';

interface Pinterface {
  userid: string;
}
export function PortPolioRenderer({ userid }: Pinterface) {
  const [pdfBlob, setPdfBlob] = useRecoilState(pdfAtom);
  const userinfo = useRecoilValue(userAtom);
  const token = useRecoilValue(authAtom);

  useEffect(() => {
    async function a() {
      const res = await getUserInfo(userid, token);
      if (!res) {
        return;
      }
      console.log(res.data.body);
      setPdfBlob(res?.data?.body?.user?.portfolioUrl ?? null);
    }
    a();
  }, [pdfBlob, setPdfBlob, token, userid]);

  return (
    <>
      {pdfBlob ? (
        <iframe
          // src={window.URL.createObjectURL(pdfBlob)}
          src={pdfBlob}
          width="100%"
          height="800px"
          style={{ marginBottom: '3rem' }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '800px',
            marginBottom: '3rem',
            border: '0.3rem solid black',
            backgroundColor: 'gray',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '3rem',
          }}
        >
          <div>PDF 파일이 존재하지 않습니다.</div>
        </div>
      )}
    </>
  );
}
