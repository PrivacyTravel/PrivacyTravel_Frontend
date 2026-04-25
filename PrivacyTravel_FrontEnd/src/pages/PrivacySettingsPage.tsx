const PrivacySettingsPage = () => {
  return (
    <section className="mx-auto max-w-2xl">
      <h1 className="mb-3 text-3xl font-bold">개인정보 공개 설정</h1>
      <p className="mb-8 text-(--text-secondary)">
        여행 기록에서 어떤 정보를 공개할지 세밀하게 설정하세요.
      </p>

      <div className="space-y-4">
        <SettingItem
          title="정확한 위치 숨기기"
          description="숙소, 실시간 위치, 상세 좌표를 비공개로 설정합니다."
        />

        <SettingItem
          title="동행자 정보 보호"
          description="동행자의 이름과 프로필 노출 범위를 제한합니다."
        />

        <SettingItem
          title="여행 일정 비공개"
          description="출발일, 귀국일, 실시간 이동 일정을 숨깁니다."
        />

        <SettingItem
          title="사진 위치 메타데이터 제거"
          description="업로드 이미지의 위치 기반 메타데이터를 제거합니다."
        />
      </div>
    </section>
  );
};

interface SettingItemProps {
  title: string;
  description: string;
}

const SettingItem = ({ title, description }: SettingItemProps) => {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-(--border-light) bg-white p-5">
      <div>
        <h2 className="font-bold">{title}</h2>
        <p className="mt-1 text-sm leading-6 text-(--text-secondary)">{description}</p>
      </div>

      <input type="checkbox" className="h-5 w-5 accent-blue-500" />
    </label>
  );
};

export default PrivacySettingsPage;
