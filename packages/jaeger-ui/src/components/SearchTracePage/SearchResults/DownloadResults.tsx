// Copyright (c) 2023 Uber Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as React from 'react';
import { Button } from 'antd';

type Props = {
  onDownloadResultsClicked: () => void;
};

export default function DownloadResults(props: Props) {
  const { onDownloadResultsClicked } = props;
  const downloadBtn = (
    <Button className="ub-ml2" htmlType="button" onClick={onDownloadResultsClicked}>
      Download Results
    </Button>
  );
  return <>{downloadBtn}</>;
}
