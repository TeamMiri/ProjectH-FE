import { APIinstance } from '@/utils/axiosInstance';
import { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import { pdfAtom } from '@/atoms/pdfAtom';
import { useRecoilState } from 'recoil';

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
      const response: AxiosResponse<Blob> = await APIinstance.get(
        '/myportpolio',
        {
          responseType: 'blob',
        }
      );
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
