import React, { useEffect } from 'react';
import { pdfAtom } from '@/atoms/pdfAtom';
import { useRecoilState } from 'recoil';
import { getPortPolioPDF } from '@/utils/pdfAPI';

export function PortPolioRenderer() {
  const [pdfBlob, setPdfBlob] = useRecoilState(pdfAtom);

  useEffect(() => {
    // Fetch the PDF file from the server and set the blob in the component state
    if (pdfBlob !== null) {
      return;
    }
    fetchPDF();
  }, [pdfBlob]);

  async function fetchPDF() {
    try {
      const response = await getPortPolioPDF('username');
      if (!response || response.status === 404) {
        return {
          notFound: true,
        };
      }
      setPdfBlob(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      {pdfBlob ? (
        <iframe
          src={window.URL.createObjectURL(pdfBlob)}
          width="100%"
          height="800px"
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '800px',
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
