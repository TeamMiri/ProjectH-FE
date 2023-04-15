import React, { useEffect } from 'react';
import { pdfAtom } from '@/atoms/pdfAtom';
import { useRecoilState } from 'recoil';
import { getPortPolioPDF } from '@/utils/getPortPolioPDF';

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
        alert('올바르지 않은 요청입니다.');
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
      {pdfBlob && (
        <iframe
          src={window.URL.createObjectURL(pdfBlob)}
          width="80%"
          height="800px"
        />
      )}
    </>
  );
}
